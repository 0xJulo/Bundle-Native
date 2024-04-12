import React, { useState} from 'react';
import GlobalStyles from '../GlobalStyles';

// React Native imports
import { View, Text, StyleSheet } from 'react-native';

// Component imports
import DropdownComponent from '../components/DropdownComponent';
import CustomButton from '../components/CustomButton';
import AmountInput from '../components/AmountInputComponent';

// Component structure 
type SelectNetworkProps = {

}

// Actual component
export default function SelectNetwork(){
    const [isNetworkSelected, setIsNetworkSelected] = useState(false);
    const [isAssetSelected, setIsAssetSelected] = useState(false);
    const [isAmountEntered, setIsAmountEntered] = useState(false);
    const [selectedNetwork, setSelectedNetwork] = useState('false');
    const [selectedAsset, setSelectedAsset] = useState('false');
    const [amount, setAmount] = useState('0');

    const networks = ['Ethereum', 'Arbitrum', 'Gnosis Chain'];
    const assetOptions = ['ETH', 'USDC', 'DAI', 'WBTC', 'USDT', 'GNO'];

    const handleNetworkSelect = (network: string) => {
        setIsNetworkSelected(true);
        setSelectedNetwork(network);
    };

    const handleAssetSelect = (asset: string) => {
        setIsAssetSelected(true);
        setSelectedAsset(asset);
    };
    
    return (
        <View>
            <Text style={GlobalStyles.textNormal}>Select network:</Text>
            <DropdownComponent options={networks} onOptionSelected={handleNetworkSelect} />
            {isNetworkSelected && (
                <View style={{ marginTop: 15}}>
                    <Text style={GlobalStyles.textNormal}>Select asset:</Text>
                    <DropdownComponent options={assetOptions} onOptionSelected={handleAssetSelect} />
                </View>
            )}
            {isNetworkSelected && isAssetSelected && (
                <View style={{ marginTop: 15}}>
                <Text style={GlobalStyles.textNormal}>Enter amount:</Text>
                <AmountInput />
            </View>
            )}
            {isAssetSelected && isNetworkSelected && (
                <View style={{ marginTop: 15}}>
                    <CustomButton text="Continue" />
                </View>
            )}
        </View>
    );
}

// Component styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});



