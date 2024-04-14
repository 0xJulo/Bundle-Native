import { ExampleDataStore } from '../../ExampleDataStore';

interface Trigger {
    type: string;
    input: string;
}

function createTrigger(bundleId: number, trigger: Trigger) {
    const bundleIndex = ExampleDataStore.findIndex(bundle => bundle.id === bundleId);

    if (bundleIndex !== -1){
        ExampleDataStore[bundleIndex].trigger = trigger;
    } else {
        const newBundle = {
            id: bundleId,
            name: '',
            type: '',
            created: '',
            owner: '',
            description: '',
            tags: [],
            trigger: {
                type: trigger.type,
                input: trigger.input,
            },
            condition: { type: '', source: '' },
            action: { type: '', source: '' },
            steps: [],
        };
        ExampleDataStore.push(newBundle);
    }
}

// IT SEEMS LIKE YOU CANNOT PUSH THIS UPDATE WITHOUT PROVIDING
// WAYS FOR THE EXAMPLE DATA STORE TO JUST UPDATE THIS PART OF
// THE STATE.
// CONSIDER HOW YOU MIGHT BREAK DOWN EXAMPLE STORE INTO SMALLER 
// SECTIONS

