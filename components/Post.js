import React from "react";
import { View, Image } from "react-native";
import { Text, Button, Icon, Layout } from "@ui-kitten/components";

const Post = ({ postData }) => {
  const { avatar, name, time, content, place } = postData;

  return (
    <View style={{ flexDirection: "row", padding: 10 }}>
      <Image
        source={{ uri: avatar }}
        style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text category="h6" style={{ flex: 1 }}>
            {name}
          </Text>
          <Text category="s2">{time}</Text>
        </View>
        <Text>{content}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Button
            appearance="ghost"
            status="basic"
            accessoryLeft={(props) => <Icon {...props} name="heart-outline" />}
          ></Button>
          <Button
            appearance="ghost"
            status="basic"
            accessoryLeft={(props) => (
              <Icon {...props} name="message-circle-outline" />
            )}
          >
            Comment
          </Button>
          <Text style={{ flex: 1, textAlign: "right" }}>{place}</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
