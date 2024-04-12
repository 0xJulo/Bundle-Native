import { useState, useEffect } from 'react';
import { ExampleDataStore } from '../../ExampleDataStore';

interface Condition {
    type: string;
    source: string;
}

export default function useCondition(bundleId: number) {
    const [condition, setCondition] = useState<Condition | null>(null);

    useEffect(() => {
        const bundle = ExampleDataStore.find(bundle => bundle.id === bundleId);
        if (bundle) {
            setCondition(bundle.condition);
        }
    }, [bundleId]);

    return { condition };
};