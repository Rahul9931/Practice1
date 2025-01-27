// DownloadableCardList.tsx
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import DownloadableCard from "../downloadable card";

type DownloadableCardListProps = {
  data: Array<{
    id: string;
    orderId: string;
    title: string;
    date: string;
    status: string;
    downloads: string;
  }>;
  onArrowClick: (orderId: string) => void; // Callback for arrow icon
  onDownloadClick: (title: string) => void; // Callback for download button
};

const DownloadableCardList: React.FC<DownloadableCardListProps> = ({
  data,
  onArrowClick,
  onDownloadClick,
}) => {
  const renderItem = ({ item }: any) => (
    <DownloadableCard
      orderId={item.orderId}
      title={item.title}
      date={item.date}
      status={item.status}
      downloads={item.downloads}
      onArrowClick={() => onArrowClick(item.orderId)} // Pass the orderId to the parent's callback
      onDownloadClick={() => onDownloadClick(item.title)} // Pass the title to the parent's callback
    />
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
  contentContainer: {
    paddingBottom: 20,
  },
});

export default DownloadableCardList;
