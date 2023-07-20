import { ReactNode, useEffect, useState } from 'react';

interface Props<T> {
    items: T[];
    render: (item: T, idx: number) => ReactNode;
    config: {
        columns: number | number[];
        gap: number | number[];
        media?: number[];
    }
}

const Masonry = <T,>({ items, config, render }: Props<T>) => {

    const useMediaValues = (medias: number[] | undefined, columns: number[], gap: number[]) => {
        const [values, setValues] = useState({ columns: 1, gap: 1 })
        useEffect(() => {

            if (!medias) {
                setValues({ columns: columns[0], gap: gap[0] });
                return;
            }

            const mediaQueries = medias.map((media) =>
                window.matchMedia(`(min-width: ${media}px)`)
            );

            const onSizeChange = () => {
                let matches = 0;

                mediaQueries.forEach((mediaQuery) => {
                    if (mediaQuery.matches) {
                        matches++;
                    }
                });

                const idx = Math.min(mediaQueries.length - 1, Math.max(0, matches));
                setValues({ columns: columns[idx], gap: gap[idx] });
            };

            onSizeChange();

            for (const mediaQuery of mediaQueries) {
                mediaQuery.addEventListener("change", onSizeChange);
            }

            return () => {
                for (const mediaQuery of mediaQueries) {
                    mediaQuery.removeEventListener("change", onSizeChange);
                }
            }
            // eslint-disable-next-line
        }, [values.columns, values.gap])

        return values;
    }

    const createSafeArray = (data: number | number[]) => {
        return Array.isArray(data) ? data : [data];
    };

    const { columns, gap } = useMediaValues(
        config.media,
        createSafeArray(config.columns),
        createSafeArray(config.gap)
    );

    const createChunks = (data: T[] = [], columns = 3) => {
        const result: T[][] = [];

        for (let idx = 0; idx < data.length; idx += columns) {
            const slice = data.slice(idx, idx + columns);
            result.push(slice);
        }

        return result;
    };

    const createDataColumns = (data: T[][] = [], columns = 3) => {
        const result: T[][] = Array.from<T[], T[]>({ length: columns }, () => []);

        for (let idx = 0; idx < columns; idx++) {
            for (let jdx = 0; jdx < data.length; jdx += 1) {
                if (data[jdx][idx]) {
                    result[idx].push(data[jdx][idx]);
                }
            }
        }

        return result;
    };

    const MasonryRow = ({ children, gap }: { children: ReactNode; gap: number }) => {
        return (
            <div
                style={{
                    display: "grid",
                    rowGap: gap,
                    gridTemplateColumns: "minmax(0, 1fr)",
                }}
            >
                {children}
            </div>
        )
    }

    const chunks = createChunks(items, columns);
    const dataColumns = createDataColumns(chunks, columns);

    return (
        <div
            style={{
                display: "grid",
                alignItems: "start",
                gridColumnGap: gap,
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            }}
        >
            {
                dataColumns.map((column, idx) => (
                    <MasonryRow gap={gap} key={idx} >
                        {column.map((item, idx) => render(item, idx))}
                    </MasonryRow>
                ))
            }
        </div>
    )
}
export default Masonry