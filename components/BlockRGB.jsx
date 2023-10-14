import { View, Dimensions} from "react-native";
export default function BlockRGB(props) {

    const screenWidth = Dimensions.get("window").width;
    const numColumns = 4;
    const tileSize = screenWidth / numColumns;


    return (
        <View style={{backgroundColor:`rgb(${props.red},${props.green},${props.blue})`,
        padding: 30,
        width: tileSize,
        height: tileSize
         }}>
        
        </View>
    );
       
};