import React from 'react';
import { View } from 'react-native';
import ImageDetail from '../ReusableComponents/ImageDetail'

const ImageDisplay = () => {
    return (
        <View>
            <ImageDetail
                title="Forest"
                imageSource={require('../../assets/forest.jpg')} />
            <ImageDetail
                title="Beach"
                imageSource={require('../../assets/beach.jpg')} />
            <ImageDetail
                title="mountain"
                imageSource={require('../../assets/mountain.jpg')} />
        </View>
    );
}

export default ImageDisplay;