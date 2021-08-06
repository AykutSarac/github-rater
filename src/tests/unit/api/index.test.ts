import { GetUserData } from '../../../api';

describe('GetUserData', () => {
  it('should return user data of AykutSarac', async () => {
    const data = await GetUserData('aykutsarac')

    expect(data.user).toBeTruthy();
    expect(data.repos).toBeTruthy();
    expect(data.isStarred).toBe(true);
  });
});
