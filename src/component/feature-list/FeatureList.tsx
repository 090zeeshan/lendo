import React, {useCallback} from 'react';
import {View, FlatList, ListRenderItem} from 'react-native';
import {styles} from './featureList.styles';
import {ListTitle} from '../list-title/ListTitle';
import {Feature, FeatureProps} from '../feature/Feature';

interface FeatureListProps {
  features: FeatureProps[];
}

export const FeatureList: React.FC<FeatureListProps> = ({features}) => {
  const onRenderFeatureItem: ListRenderItem<FeatureProps> = useCallback(
    ({item}) => {
      return <Feature {...item} />;
    },
    [],
  );

  const featureListSeparator = useCallback(
    () => <View style={styles.featuresListSeparator} />,
    [],
  );

  return (
    <>
      <ListTitle title="Explore Lendo Features!" />
      <FlatList
        contentContainerStyle={styles.featuresList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={features}
        ItemSeparatorComponent={featureListSeparator}
        renderItem={onRenderFeatureItem}
      />
    </>
  );
};
