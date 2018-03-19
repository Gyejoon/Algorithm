import java.util.Scanner;

public class Test2747 {

	public static int[] memo = new int[100];
	
	//recursion
	public static int recursion(int n){
		if(n == 0)
			return 0;
		else if(n == 1)
			return 1;
		else
			return recursion(n - 1) + recursion(n - 2);
	}
	
	//dp
	public static int dynamicP(int n){
		if(memo[n] != 0) 
			return memo[n];
		if(n == 0 || n == 1)
			return n;
		
		memo[n] = dynamicP(n - 1) + dynamicP(n - 2);
		
		return memo[n];
	}
	
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int out = sc.nextInt();	
		
		System.out.println(dynamicP(out));
		//System.out.println(recursion(out));
	}

}
