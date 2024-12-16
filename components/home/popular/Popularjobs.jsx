import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import styles from "./popularjobs.style";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
