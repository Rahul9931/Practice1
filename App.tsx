import React from 'react';
import { Provider } from 'react-redux';
import store from './src/pagination/redux/store';
import PaginatedList from './src/pagination/PaginatedList';
import { StyleSheet, View } from 'react-native';
import CustomIcon from './src/components/ReusableIcon/CustomIcon';
// import DownloadableCard from './src/downloadable products/downloadable card';
import DownloadableCardList from './src/downloadable products/downloadable list';

const App = () => {

  const data = [
    {
      id: "1",
      orderId: "#000000418",
      title: "Spring Yoga Video",
      date: "1/19/24",
      status: "PENDING",
      downloads: "Unlimited",
    },
    {
      id: "2",
      orderId: "#000000419",
      title: "Summer Fitness Guide",
      date: "2/10/24",
      status: "COMPLETED",
      downloads: "5",
    },
  ];

  const handleArrowClick = (orderId: string) => {
    console.log("Arrow Clicked", `Order ID: ${orderId}`);
  };

  // Callback for download button click
  const handleDownloadClick = (title: string) => {
    console.log("Download Initiated", `Downloading: ${title}`);
  };

  return (
    <View style={styles.container}>
       <DownloadableCardList
        data={data}
        onArrowClick={handleArrowClick} // Pass callback for arrow icon
        onDownloadClick={handleDownloadClick} // Pass callback for download button
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Arrange icons in a row
    flexWrap: 'wrap', // Wrap to the next line if needed
  },
});

export default App;
