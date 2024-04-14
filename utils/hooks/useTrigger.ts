import { useState, useEffect } from 'react';
import { ExampleDataStore } from '../../ExampleDataStore';

interface Trigger {
    title: string;
    type: string;
    input: string;
}

export default function useTrigger(bundleId: number) {
    const [trigger, setTrigger] = useState<Trigger | null>(null);

    useEffect(() => {
        const bundle = ExampleDataStore.find(bundle => bundle.id === bundleId);
        if (bundle) {
            setTrigger(bundle.trigger);
        }
    }, [bundleId]);

    return { trigger };
};