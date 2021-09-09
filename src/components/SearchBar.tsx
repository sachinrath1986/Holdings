import React, { useState } from 'react';
import { IonIcon, IonSearchbar } from '@ionic/react';
import { filterOutline } from 'ionicons/icons';
import SearchBarStyle from './SearchBar.module.css';
import './SearchBar.css';

type SearchBarProps = {
  onSearchChange: (value: string) => void;
  placeholder: string;
  onClickFilter: () => void;
};

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [searchText, setSearchText] = useState('');
  const [showPopover, setShowPopover] = useState(false);

  const { onSearchChange, placeholder, onClickFilter } = props;

  const handleSearchChange = (event: CustomEvent) => {
    setSearchText(event.detail.value);
    onSearchChange(event.detail.value);
  };

  return (
    <IonSearchbar
      value={searchText}
      placeholder={placeholder}
      onIonChange={handleSearchChange}
      class={`searchbar_container flex-row-reverse p-0 rounded-lg h-12 ${SearchBarStyle.searchbar}`}
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
