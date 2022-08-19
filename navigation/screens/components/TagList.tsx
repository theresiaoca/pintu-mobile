
import { ScrollView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15
  },
  tagContainer:{
    padding: 8,
    borderColor:"lightgrey",
    borderWidth:1,
    marginHorizontal: 5,
    borderRadius: 100
  }
});

type TagsListProps = {
  tags: string[];
};

const TagList = ({ tags }: TagsListProps) => {

  return (
    <ScrollView horizontal style={styles.container}>
      {tags.map((tag, index) => (
        <View key={index} style={styles.tagContainer}>
          <Text>{tag}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TagList;
