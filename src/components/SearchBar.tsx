import React, { useState } from 'react';
import { IonIcon, IonSearchbar } from '@ionic/react';
import { filterOutline } from 'ionicons/icons';
import SearchBarStyle from './SearchBar.module.css';

type SearchBarProps = {
  onSearchChange: (value: string) => void;
  // eslint-disable-next-line react/require-default-props
  placeholder?: string;
  onClickFilter: () => void;
};

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [searchText, setSearchText] = useState('');

  const { onSearchChange, placeholder = 'Search', onClickFilter } = props;

  const handleSearchChange = (event: CustomEvent) => {
    setSearchText(event.detail.value);
    onSearchChange(event.detail.value);
  };

  return (
    <IonSearchbar
      value={searchText}
      placeholder={placeholder}
      onIonChange={handleSearchChange}
      className={`searchbar_container flex-row-reverse p-0 h-12 ${SearchBarStyle.searchbar}`}
    >
      <div className="flex justify-end pr-4">
        <IonIcon
          icon={filterOutline}
          onClick={onClickFilter}
          class="text-white text-opacity-50 text-xl"
        />
      </div>
    </IonSearchbar>
  );
};

export default SearchBar;
