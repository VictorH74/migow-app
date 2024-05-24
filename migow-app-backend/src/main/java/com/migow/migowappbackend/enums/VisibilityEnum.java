package com.migow.migowappbackend.enums;

public enum VisibilityEnum {
    PUBLIC(1),
	FOLLOWERS(2),
	NOBODY(3);
	
	private final int code;
	
	private VisibilityEnum(int code) {
		this.code = code;
	}
	
	public int getCode() {
		return code;
	}
	
	public static VisibilityEnum valueOf(int code) {
		for(VisibilityEnum value: VisibilityEnum.values()) {
			if(value.getCode() == code)
				return value;
		}
		throw new IllegalArgumentException("Invalid VisibilityEnum code!");
	}
}
