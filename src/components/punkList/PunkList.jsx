import './punkList.css';
import CollectionCard from "../collectionCard/CollectionCard";

const PunkList = ({punkListData, setSelectedPunk}) => {
    return (
        <div className="punkList">
            {punkListData.map((punk) => (
              <div key={punk.token_id} onClick={() => setSelectedPunk(punk.token_id)}>
                  <CollectionCard 
                    id={punk.token_id}
                    name={punk.name}
                    traits={punk.traits}
                    image={punk.image_original_url}
                  />
              </div>
            ))}
        </div>
    )
}

export default PunkList;
