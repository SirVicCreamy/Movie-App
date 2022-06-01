import { check_db } from './Login'


test('login_test', () => {
    const wrong_val1 = check_db("user1", "pass1");
    const wrong_val2 = check_db("user1", "pass12345");
    const wrong_val3 = check_db("user12345", "pass1");

    expect(wrong_val1).toBe("nothing wrong");
    expect(wrong_val2).toBe("wrong pass");
    expect(wrong_val3).toBe("wrong user");
})