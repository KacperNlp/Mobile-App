import { Text, View, Button } from "react-native";

interface Props {
    text: string;
    id: number;
    handleClickRemoveTask: (id: number) => void,
    handleClickChangeStatus: (id: number) => void,
}

const AppListElement: React.FC<Props> = ({ text, id, handleClickRemoveTask, handleClickChangeStatus }) => {
    return (
        <View>
            <Text>{ text }</Text>
            <Button title="Change status" onPress={() =>handleClickChangeStatus(id)} />
            <Button title="Remove" onPress={() =>handleClickRemoveTask(id)} />
        </View>
    )
}


export default AppListElement;