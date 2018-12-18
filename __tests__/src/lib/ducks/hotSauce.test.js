import {hotSauceState as hotSauceReducer, addSauce, removeSauce, updateSauce} from '../../../../src/lib/ducks/hotSauce.js';
import hotSauceJSON from '../../../../src/data/hotsauces.json';

describe('hotSauce reducer', () => {
  let hotSauces;

  beforeEach(() => {
    hotSauces = hotSauceJSON.list;
  });

  it('should start off with an initial state on default case', () => {
    const newState = hotSauceReducer(hotSauces, 'default');
    expect(newState.length).toBe(8);
  });

  it('should not make changes if case does not match (resolve to default case)', () => {
    const newState = hotSauceReducer(hotSauces, 'Fake case');
    expect(newState.length).toBe(8);
  });

  it('should remove a hot sauce with removeSauce action', () => {
    const newState = hotSauceReducer(hotSauces, removeSauce(7));
    expect(newState.length).toBe(7);
  });

  it('should add a hot sauce with addSauce action', () => {
    let newSauce = {
      id: 8,
      title: 'La Victoria',
      subtitle: 'it\'s delicious',
      description: 'Try this hot sauce',
      imageURL: 'www.fakepath.com',
    };

    const newState = hotSauceReducer(hotSauces, addSauce(newSauce));
    expect(newState.length).toBe(9);
    expect(newState[8].title).toBe('La Victoria');
  });

  it('should update a hot sauce', () => {

    let newSauce = {
      id: 0,
      title: 'La Victoria',
      subtitle: 'it\'s delicious',
      description: 'Try this hot sauce',
      imageURL: 'www.fakepath.com',
    };

    let newState = hotSauceReducer(hotSauces, 'default');
    expect(newState.length).toBe(8);
    expect(newState[0].title).toBe('Tapatio');

    newState = hotSauceReducer(hotSauces, updateSauce(newSauce));
    expect(newState.length).toBe(8);
    expect(newState[0].title).toBe('La Victoria');
  });
});