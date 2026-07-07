import * as React from 'react';

type Stat = {
    label: string;
    value: string;
    note?: string;
};

type ResultsStatsProps = {
    stats?: Stat[];
    title?: string;
};

export default function ResultsStats({ stats = [], title = 'Results & Testing' }: ResultsStatsProps) {
    if (!stats.length) {
        return (
            <section>
                <h3 className="mb-4 text-2xl font-bold">{title}</h3>
                <div className="rounded-xl border border-dashed border-dark/15 bg-neutralAlt/40 p-6 text-sm text-dark/60">
                    Results placeholders — add performance numbers, test data, or benchmark comparisons in the project frontmatter under <code className="font-mono">stats</code>.
                </div>
            </section>
        );
    }

    return (
        <section>
            <h3 className="mb-6 text-2xl font-bold">{title}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-dark/10 bg-neutralAlt/50 p-6">
                        <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                        <p className="mt-2 font-medium">{stat.label}</p>
                        {stat.note && <p className="mt-1 text-sm text-dark/60">{stat.note}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
}
