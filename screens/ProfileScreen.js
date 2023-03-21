import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Avatar, Button, Icon, Layout } from "@ui-kitten/components";

const ProfileScreen = () => {
  const renderSettingsIcon = (props) => (
    <Icon {...props} name="settings-outline" />
  );

  const renderLogoutIcon = (props) => (
    <Icon {...props} name="log-out-outline" />
  );

  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <Avatar
          style={styles.avatar}
          size="giant"
          source={{
            uri: "https://placekitten.com/200/200", // replace with user's avatar url
          }}
        />
      </View>
      <View style={styles.footer}>
        <Button
          style={styles.button}
          appearance="ghost"
          accessoryLeft={renderSettingsIcon}
        >
          Settings
        </Button>
        <Button
          style={styles.button}
          appearance="ghost"
          accessoryLeft={renderLogoutIcon}
        >
          Log out
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    margin: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  button: {
    marginHorizontal: 8,
  },
});

export default ProfileScreen;
