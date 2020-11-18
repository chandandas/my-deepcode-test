import React from 'react';
import Modal from 'react-modal';
import TermList from './term-list.component';
import AlphabetList from './term-alphabet.component';
import Term from './term.component';
import TermSense from './term-sense.component';
import SenseItems from './sense-items.component';
import NewSense from './new-sense.component';
import PosItem from './pos-item.component';


function getTitle(alphabet){
  let title = '';
  let lcase = alphabet.toLowerCase();
  if (alphabet=== '..'){
    title = 'show all'
  }else if (alphabet === '@'){
    title = 'show term(s) starts with symbols & (0-9)'
  }else{
    title = `show term(s) starts with ${alphabet} or ${lcase} `
  }
  return title;
}
  

const customModalshowDictionary = {
  content : {
    top                   : '47%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '1200px',
    height                : '650px',
    overflow              : 'hidden'
  }
};

const customModalshowSenseItem = {
  content : {
    top                   : '47%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '700px',
    height                : '400px',
    overflow              : 'hidden'
  }
};
const newTerm = {
  content : {
    top                   : '45%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '610px'
  }
};

export default function VerifyTerm({posList,customModalNewTerm,groundTruthFileName,
  terms,searchTerm, onAddNewTerm, showTerm, onTermFilterChanged,close,onCloseTerm,
  term,onSaveTerm,onDeleteTerm,onTermChanged, onPosChanged ,  onDefChanged,
  alphabets,onViewSenses,onViewTerm ,onAlphabetSelection,onAddNewSense,showSense,
  sense,onCloseSense,onSaveSense,onSensePosChanged ,onDeleteSense,  onSenseDefChanged,
  selectedTermItems,selectedSenseItems,showSenseItem,onShowSenseItem,  onCancelSenseItem,onSaveSenseItem,
  onChangeSenseItem,hasValidationErrors,validationMessages, closeValidationMessage,validator , 
  onCheckboxChanged,onSenseSelect,defaultChecked,onOk,onCheckBoxSelectAll,
  dictList,  dictTerm,dictSeachTerm, showDictTerm,onViewDictTerm, onDictTermFilterChanged,onDictAlphabetSelection,
  onDictMoveForward,onDictMoveRight,onDictMoveLeft,onDictMoveBackward,selectedCat,selectedPos,
  onSenseTermChange,onSenseItemChange,removeSelected,selectedTermSenseOption,selectedSenseItemOption,totalTerms,
  totalNewTerms,totalTermsToBeAddedToDictionary, genders,numbers ,verbForms,
  onSenseNumberChanged,onSenseGenderChanged,onSenseVerbFormChanged}){
 


  
    let termSense = null;
  
    if (term !== null){
      termSense =   <TermSense groundTruthFileName = {groundTruthFileName} term={term}
                       onShowSenseItem={onShowSenseItem} 
                        sense={sense} onAddNewSense = {onAddNewSense} onDeleteSense = {onDeleteSense} 
                        onDeleteTerm={onDeleteTerm} onCheckBoxSelectAll={onCheckBoxSelectAll} 
                        onCheckboxChanged={onCheckboxChanged} defaultChecked={defaultChecked} onSenseSelect={onSenseSelect}
                        />;
    }else{
      termSense = <div className="nothing-show">Select a term from the list</div>
    }
  
  
    let termHeader = 'Create Term';
  
    return (
      <>
        <div  id="connectModal" tabindex="-1" data-backdrop="static" role="dialog"
        aria-labelledby="ModalLabel" aria-hidden="true">
        <div>
        <div >
        <div className="modal-header">
          <h5 className="modal-title" id="ModalLabel">Verify Terms - {groundTruthFileName}</h5>
          
        </div>
        <div className="modal-body connext-modal-body">
          <div className="row">
            <div className="col-4">
              <button className="btn btn-primary btn-block mb-2 btn-add-term" data-toggle="modal" data-target="#termModal"
                onClick={onAddNewTerm}><span className="fa fa-plus fa-lg"></span> New Term</button>
              <div className="card mt-0">
                <div className="card-header bg-info"><input type="text" id="psrcInput" className="form-control float-right"
                    placeholder="Search" value={searchTerm} onChange= {onTermFilterChanged}/></div>
                     {/* term section */}
                  <div className="card-body p-0  term-list popup-term-list">
                      <div >
                         {/*  <AlphabetList alphabets= {alphabets} onAlphabetSelection = {onAlphabetSelection}/>
                          */}
                       <div id="palphaIndex-nav" className="listNav">
                          <div className="ln-letters">
                              {
                              alphabets.map(alphabet =>
                                <a   key={alphabet} className="a" href="#" onClick={(event)=>onAlphabetSelection(event,alphabet)} 
                                  title={getTitle(alphabet)}>{alphabet}</a>
                              )}
                          </div>
                        </div>
                         {/* term list */}
                        <TermList terms ={terms} onViewSenses = {onViewSenses} 
                          onViewTerm = {onViewTerm} searchTerm= {searchTerm}/>
                      </div>
                  </div>
              </div>
            </div>
            
            {termSense}
          </div>
     
        </div>
        <div className="modal-footer d-inline">
             <div className="d-flex justify-content-between pl-3 pr-3">
                <div className="small">Total terms: <strong>{totalTerms}</strong> || New terms: <strong>{totalNewTerms}</strong> || Terms to be added to dictionary: <strong>{totalTermsToBeAddedToDictionary}</strong></div>
              <div >
                  <button type="button" className="btn btn-primary mr-1" data-dismiss="modal" onClick={onOk}>Ok</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={close}>Cancel</button>
              </div>
            </div>
        </div>
        
      </div>
    </div>
    
  </div>

<Modal isOpen={showTerm}  style={newTerm}>
    <Term
      posList = {posList} 
      term ={term} 
      sense={sense}
      genders= {genders}
      numbers ={numbers}
      verbForms = {verbForms} 
      termHeader = {termHeader}
      onCloseTerm={onCloseTerm} 
      onSaveTerm ={onSaveTerm}
      onTermChanged = {onTermChanged} 
      onPosChanged = {onSensePosChanged}
      onDefChanged = {onSenseDefChanged}
      hasValidationErrors = {hasValidationErrors} 
      validationMessages = {validationMessages} 
      closeValidationMessage = {closeValidationMessage}
      validator = {validator}
      onSenseNumberChanged = {onSenseNumberChanged}
      onSenseGenderChanged = {onSenseGenderChanged}
      onSenseVerbFormChanged = {onSenseVerbFormChanged}
      />      
</Modal>

<Modal  style={customModalshowDictionary}>
    <SenseItems 
      selectedTermItems={selectedTermItems} 
      selectedSenseItems={selectedSenseItems}
      onCancelSenseItem = {onCancelSenseItem}
      onSenseTermChange = {onSenseTermChange}
      onSenseItemChange = {onSenseItemChange}
      removeSelected = {removeSelected}
      onSaveSenseItem = {onSaveSenseItem}
      onChangeSenseItem = {onChangeSenseItem}
      
      term = {dictTerm}
      terms = {dictList}
      searchTerm ={dictSeachTerm}
      onTermFilterChanged = {onDictTermFilterChanged}
      alphabets = {alphabets}
      onViewSenses= {onViewDictTerm}
      onViewTerm = {onViewDictTerm}
      onAlphabetSelection={onDictAlphabetSelection}
      showDictTerm = {showDictTerm}
      onDictMoveForward={onDictMoveForward} 
      onDictMoveRight ={onDictMoveRight} 
      onDictMoveLeft={onDictMoveLeft} 
      onDictMoveBackward={onDictMoveBackward}
      selectedCat ={selectedCat}
      selectedPos ={selectedPos}
      selectedTermSenseOption= {selectedTermSenseOption}
      selectedSenseItemOption= {selectedSenseItemOption}
      />      
</Modal>

<Modal isOpen={showSenseItem}  style={customModalshowSenseItem}>
    <PosItem 
      term = {term}
      sense ={selectedPos} 
      onCloseSense={onCancelSenseItem} 
      genders= {genders}
      selectedCat = {selectedCat}
      numbers ={numbers}
      verbForms = {verbForms} 
      sense= {sense}
      onSaveSense ={onSaveSenseItem}
      hasValidationErrors = {hasValidationErrors} 
      validationMessages = {validationMessages} 
      closeValidationMessage = {closeValidationMessage}
      onSenseNumberChanged = {onSenseNumberChanged}
      onSenseGenderChanged = {onSenseGenderChanged}
      onSenseVerbFormChanged = {onSenseVerbFormChanged}
      validator= {validator}
      hasValidationErrors = {hasValidationErrors}
      validationMessages = {validationMessages} 
      closeValidationMessage = {closeValidationMessage}
    />      
</Modal>

<Modal isOpen={showSense}  style={customModalNewTerm}>
    <NewSense
      term = {term}
      posList = {posList} 
      sense ={sense} 
      onCloseSense={onCloseSense} 
      genders= {genders}
      numbers ={numbers}
      verbForms = {verbForms} 
      onSaveSense ={onSaveSense}
      onPosChanged = {onSensePosChanged}
      onDefChanged = {onSenseDefChanged}
      hasValidationErrors = {hasValidationErrors} 
      validationMessages = {validationMessages} 
      closeValidationMessage = {closeValidationMessage}
      validator = {validator}
      onSenseNumberChanged = {onSenseNumberChanged}
      onSenseGenderChanged = {onSenseGenderChanged}
      onSenseVerbFormChanged = {onSenseVerbFormChanged}
      />      
</Modal>




  </>
    )
  
}

