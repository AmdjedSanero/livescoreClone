import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LineUp from '../tabs/LineUp';
import StadeDesign from '../components/StadeDesign';

const TopTab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="LineUp" component={LineUp} />
            <TopTab.Screen name="Settings" component={StadeDesign} />
        </TopTab.Navigator>
    );
}

