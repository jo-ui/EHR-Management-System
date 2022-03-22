import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  mobile: 1,
  computers: 2,
  headphones: 3,
  airpods: 4,
  watch: 5,
};

const selectCollection = (state) => state.collection;

export const selectCollectionItems = createSelector(
  [selectCollection],
  (collectionselect) => collectionselect.collections
);

export const selectCollectionparams = (index) =>
  createSelector([selectCollection], (collection) =>
    collection.collections.find((col) => col.id === COLLECTION_ID_MAP[index])
  );
// collection.find((collection) => collection.id === COLLECTION_ID_MAP[index])
// );
