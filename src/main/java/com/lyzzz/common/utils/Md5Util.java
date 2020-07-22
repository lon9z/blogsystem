package com.lyzzz.common.utils;

import com.lyzzz.common.properties.BlogProperties;
import com.lyzzz.common.properties.ShiroProperties;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @location： BlogSystem\com.lyzzz.common.utils
 * @creatTime: 2020/7/18  15:21
 * @author: Administrator
 * @remark:
 *
 * Shiro 加密工具
 *
 */
@Component
public class Md5Util {

    @Autowired
    private BlogProperties blogProperties;

    /**
     * 算法名称
     */
    private static final String ALGORITH_NAME = "MD5";

    /**
     * 迭代次数
     */
    private static final int HASH_ITERATIONS = 2;

    /**
     * Shiro 加密
     *
     * @param password 明文密码
     * @return 加密后的密码
     * @value shiro.getCipherKey() 加密混用的盐值
     */
    public String encryptPassword(String password) {
        ShiroProperties shiro = blogProperties.getShiro();
        if (password == null) {
            return null;
        }
        return new SimpleHash(
                ALGORITH_NAME,
                StringUtils.lowerCase(StringUtils.lowerCase(password)),
                shiro.getCipherKey(),
                HASH_ITERATIONS).toHex();
    }
}
