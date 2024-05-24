package com.migow.migowappbackend.enums;

public enum NotificationTypeEnum {
    COMMENT_REPLAY(1),
    NEW_POST(2),
    POST_COMMENT(3),
    COMMENT_REACT(4),
    POST_REACT(5);

    private final int code;

    private NotificationTypeEnum(int code) {
        this.code = code;
    }

    public int getCode() {
        return this.code;
    }

    public static NotificationTypeEnum valueOf(int code) {
		for(NotificationTypeEnum value: NotificationTypeEnum.values()) {
			if(value.getCode() == code)
				return value;
		}
		throw new IllegalArgumentException("Invalid NotificationTypeEnum code!");
	} 
}
