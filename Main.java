public class Main
{
	public static void main(String[] args) {
		int arr[]={1,2,3,4,5};
		String ans = "";
		recur(arr,0,10,0,ans);
	}
	
	
	public static void recur(int arr[],int sum, int target,int i, String ans )
	{
	    if(i==arr.length){ 
    	    if(sum==target)
    	        System.out.println(ans);
    	    return;
	    }
	    recur(arr,sum+arr[i],target,i+1,ans+arr[i]+",");
	    recur(arr,sum,target,i+1,ans);
	    
	}
}

