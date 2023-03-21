import React from "react";
import { View, Text, Image } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Layout } from "@ui-kitten/components";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(255, 166, 0, ${opacity})`, // orange color
      strokeWidth: 2, // optional
    },
  ],
};

const StatsScreen = () => {
  return (
    <Layout style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../assets/growing-tree.png")}
        resizeMode="contain"
        style={{ height: 400 }}
      />
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ marginTop: 16, fontSize: 24, fontWeight: "bold" }}>
          Your Progress
        </Text>
        <Text style={{ marginTop: 8 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus
          elit. Fusce lobortis justo a tincidunt commodo.
        </Text>
        <LineChart
          data={data}
          width={null}
          height={220}
          chartConfig={{
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 166, 0, ${opacity})`, // orange color
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "4",
              strokeWidth: "2",
              stroke: "#fff",
            },
          }}
          bezier
          style={{
            marginVertical: 16,
            borderRadius: 16,
          }}
        />
      </View>
    </Layout>
  );
};

export default StatsScreen;
