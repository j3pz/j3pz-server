import { TestContext } from '@tsed/testing';
import { Server } from '../../src/Server';

before(TestContext.bootstrap(Server));
after(TestContext.reset);
