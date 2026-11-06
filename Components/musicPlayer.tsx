import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useAudioPlayer } from 'expo-audio';
import { MaterialIcons } from '@expo/vector-icons';

const backMusic = require("../assets/melodies/KokiriForest.mp3");

export function MusicPlayer() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return <AudioController />;
}

function AudioController() {
    const player = useAudioPlayer(backMusic);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (player) {
            player.loop = true;
            player.volume = 0.4;
        }
    }, [player]);

    const togglePlay = async () => {
        if (!player) return;

        if (isPlaying) {
            player.pause();
            setIsPlaying(false);
        } else {
            try {
                await player.play();
                setIsPlaying(true);
            } catch (error) {
                console.log("Error al reproducir audio:", error);
            }
        }
    };

    return (
        <TouchableOpacity
            style={[styles.iconButton, isPlaying && styles.iconButtonActive]}
            onPress={togglePlay}
            activeOpacity={0.7}
            accessibilityLabel="Controlar música de fondo"
        >
            <MaterialIcons
                name={isPlaying ? "volume-up" : "volume-off"}
                size={16}
                color={isPlaying ? "#5cdc38" : "#94A3B8"}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
    iconButtonActive: {
        borderColor: '#5cdc38',
        backgroundColor: '#0F291E',
    },
});

export default MusicPlayer;