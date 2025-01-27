// DownloadableCard.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type DownloadableCardProps = {
  orderId: string;
  title: string;
  date: string;
  status: string;
  downloads: string;
  onArrowClick: () => void; // Callback for arrow icon
  onDownloadClick: () => void; // Callback for download button
};

const DownloadableCard: React.FC<DownloadableCardProps> = ({
  orderId,
  title,
  date,
  status,
  downloads,
  onArrowClick,
  onDownloadClick,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.orderId}>{orderId}</Text>
            <Text style={styles.title}>{title}</Text>
          </View>
          {/* TouchableOpacity for arrow click */}
          <TouchableOpacity onPress={onArrowClick}>
            <Icon name="keyboard-arrow-right" size={24} color="#000" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>

        <Text style={styles.downloads}>Remaining Downloads: {downloads}</Text>

        {/* TouchableOpacity for download button */}
        <TouchableOpacity style={styles.downloadButton} onPress={onDownloadClick}>
          <Icon name="file-download" size={20} color="#000" />
          <Text style={styles.downloadText}>DOWNLOAD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    marginTop: 10,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  orderId: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
  },
  arrowIcon: {
    marginLeft: 10,
  },
  date: {
    fontSize: 14,
    color: "#555",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "orange",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  downloads: {
    fontSize: 14,
    color: "#555",
    marginBottom: 15,
    marginTop: 8,
  },
  downloadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
  },
  downloadText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default DownloadableCard;
