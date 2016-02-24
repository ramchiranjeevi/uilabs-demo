import Ember from 'ember';

export default Ember.Mixin.create({
    actions: {
    // COMMON ARROW ACTION HANDLER
        arrowActions( event, pressedKey, viewType ){
            var _self = this,
                _currentModelIndex = _self.get('currentModelIndex'), // No I18N
                // _nextModelIndex = _currentModelIndex + 1,
                _modelObject = _self.get("model");

            if( (pressedKey === "down" && viewType === "list") || (pressedKey === "right" && viewType === "grid") ){
                _self.send( "downArrowAction", event, _currentModelIndex, _modelObject );
            }
            else if( (pressedKey === "up" && viewType === "list") || (pressedKey === "left" && viewType === "grid") ){
                _self.send( "upArrowAction", event, _currentModelIndex, _modelObject );
            }
            /*else if ( pressedKey == "down" && viewType === "grid" ){

            }
            else if ( pressedKey == "up" && viewType === "grid" ){

            }*/
        },

    // DOWN ARROW ACTION HANDLER
        downArrowAction( event, currentModelIndex, modelObject ){
            var _self = this,
                _nextModelIndex = currentModelIndex + 1,
                _nextModelObject = modelObject.objectAt(_nextModelIndex);

            if( _nextModelObject && _nextModelObject.split && modelObject.objectAt(_nextModelIndex+1) ) {
                _nextModelIndex += 1;
            } else if( !_nextModelObject ) {
                _nextModelIndex = currentModelIndex;
            }
            _self.send( "_changeSelectedState", modelObject, modelObject.objectAt(_nextModelIndex), _nextModelIndex );
        },

    // UP ARROW ACTION HANDLER
        upArrowAction( event, currentModelIndex, modelObject ){
            var _self = this,
                _nextModelIndex = currentModelIndex - 1,
                _nextModelObject = modelObject.objectAt(_nextModelIndex);

            if( _nextModelObject && _nextModelObject.split && modelObject.objectAt(_nextModelIndex-1) ){
                _nextModelIndex -= 1;
            } else if( !_nextModelObject || !modelObject.objectAt(_nextModelIndex-1) ){
                _nextModelIndex = currentModelIndex;
            }
            _self.send( "_changeSelectedState", modelObject, modelObject.objectAt(_nextModelIndex), _nextModelIndex );
        },

        _changeSelectedState( wholeModelObject, selectedModelObject, selectedModelIndex ){
            var _self = this;
            _self.send( "deselectModels", wholeModelObject); //No I18N
            selectedModelObject.set("is_active", true); // No I18N
            _self.set('currentModelIndex', selectedModelIndex); // No I18N
        },

    // DESELECTING SELECTED MODEL ACTION HANDLER
        deselectModels( modelObject ){
            var _self = this,
                _modelObject = modelObject ? modelObject : _self.get( "model" );

            _modelObject.setEach( "is_active", false );
        },

    // SELECTING ALL MODEL ACTION HANDLER
        onAllItemSelect(){
            var _self = this,
                _modelObject = _self.get( "model" );

            _modelObject.rejectBy( "split", true ).setEach("is_active", true); // No I18N
        },

        onItemSelect( event, selectedModel ){
            var _self = this,
                _modelObject = _self.get("model");

            _self.send( "deselectModels", _modelObject );  // No I18N
            selectedModel.set("is_active", true); // No I18N
            _self.set( "currentModelIndex", _modelObject.indexOf( selectedModel ) );  // No I18N
        }
    }
});
