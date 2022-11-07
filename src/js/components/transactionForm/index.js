import { component } from '../../core';
import transactionForm from './template';
import controller from './controller';

const page = () => component({template: transactionForm, controller});

export default page;
