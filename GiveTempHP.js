let myActorItems = actor.items.get('63x79qG1U4sw8Mwz'); //_id
let levels = myActorItems.data.data.level;
let newTempHP = 2 * levels;

actor.update({
    'data.attributes.hp.temp' : newTempHP,
    'data.attributes.hp.tempmax' : newTempHP
});
