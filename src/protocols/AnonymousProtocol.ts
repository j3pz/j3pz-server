import { OnVerify, Protocol } from '@tsed/passport';
import { Strategy } from 'passport-anonymous';
import { UserService } from '../services/UserService';
import { UserInfo } from '../model/Credentials';

@Protocol<{}>({
    name: 'anonymous',
    useStrategy: Strategy,
})
export class AnonymousLocalProtocol implements OnVerify {
    public constructor(private userService: UserService) {}

    public async $onVerify(): Promise<UserInfo> {
        return {};
    }
}
