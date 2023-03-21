import React from "react";
import { View } from "react-native";
import { Text, Input, Button, Layout } from "@ui-kitten/components";

const CreatePostScreen = () => {
  const [imageUri, setImageUri] = React.useState("");
  const [caption, setCaption] = React.useState("");

  const handleAddPost = () => {
    // TODO: Implement adding the post to the backend
  };

  return (
    <Layout style={{ flex: 1 }}>
      <View style={{ alignItems: "center", marginVertical: 24 }}>
        <Text category="h5">New Post</Text>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <View
          style={{
            height: 200,
            borderRadius: 8,
            overflow: "hidden",
            marginBottom: 16,
          }}
        >
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={{ flex: 1 }} />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ marginTop: 8, color: "#888" }}>
                Tap to add a photo
              </Text>
            </View>
          )}
        </View>
        <Input
          size={"large"}
          placeholder="Write a caption..."
          value={caption}
          onChangeText={setCaption}
          multiline
          textStyle={{
            height: 300,
            borderRadius: 8,
            padding: 16,
            fontSize: 16,
            backgroundColor: "#f6f6f6",
            marginBottom: 16,
            color: "#888",
            marginBottom: 80,
          }}
        />
        <Button onPress={handleAddPost} style={{ borderRadius: 8 }}>
          Post
        </Button>
      </View>
    </Layout>
  );
};

export default CreatePostScreen;
