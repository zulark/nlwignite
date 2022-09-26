import { useState } from 'react';

import { MaterialIcons } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard'

import { CheckCircle } from 'phosphor-react-native'

import { View, Text, Modal, ModalProps, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';


interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}


export function DuoMatch({ discord, onClose, ...rest }: Props) {

const [isCopping, setIsCopping] = useState(false);

    async function handleCopyDiscordUser() {
        setIsCopping(true);
        await Clipboard.setStringAsync(discord);
        Alert.alert('Sucesso🤩', 'Usuário copiado para a área de transferência')
        setIsCopping(false)
    }

    return (


        <Modal
            animationType='slide'
            transparent
            statusBarTranslucent
            {...rest}>

            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={onClose}
                    >
                        <MaterialIcons
                            name='close'
                            size={20}
                            color={THEME.COLORS.CAPTION_500}
                        />
                    </TouchableOpacity>

                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight="bold"
                    />

                    <Heading
                        title="Let's play"
                        subtitle='Agora é so começar a jogar!'
                        style={{ alignItems: 'center', marginTop: 24 }}
                    />


                    <Text
                        style={styles.label}>
                        Adicione no Discord
                    </Text>


                    <TouchableOpacity
                        style={styles.discordButton}
                        onPress={handleCopyDiscordUser}
                        disabled={isCopping}
                    >

                        <Text style={styles.discord}>
                            {isCopping ? <ActivityIndicator/> : discord}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>



        </Modal>


    );
}