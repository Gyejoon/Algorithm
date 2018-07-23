import java.util.Scanner;

public class Test2908 {

	// 문자열 뒤집기
	public static String swap(String str) {
		char[] c = new char[str.length()];
		int len = str.length() - 1;
		
		for(int i = len; i >= 0; i--) {
			c[len - i] = str.charAt(i);
		}
		
		return new String(c);
	}
	
	public static int solution(int a, int b) {
		String sa = String.valueOf(a);
		String sb = String.valueOf(b);
		
		int resultA = Integer.parseInt(swap(sa));
		int resultB = Integer.parseInt(swap(sb));
		
		return resultA > resultB ? resultA : resultB;
	}
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		int a = sc.nextInt();
		int b = sc.nextInt();
		
		int result = solution(a, b);
		
		System.out.println(result);
	}

}
