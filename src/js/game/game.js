/**
 * project match-match.
 */

import registrationForm from '../handlers/formControls';
import startControls from '../handlers/startControls';
import menuHandler from '../handlers/menuHandler';
import recordsHandler from '../handlers/recordsHandler';
import { game } from './gameClass';

startControls.addListeners();
registrationForm.addListeners();
menuHandler.addListeners();
menuHandler.setActiveMenuItems();
recordsHandler.addListener();
game.addListeners();
