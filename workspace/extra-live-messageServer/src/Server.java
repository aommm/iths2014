import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;


public class Server extends Thread {

	private OnMessageReceived listener;
	
	private PrintWriter out;
	private BufferedReader in;
	
	public Server(OnMessageReceived listener) {
		this.listener = listener;
	}
	
	public void sendMessage(String msg) {
		if (out != null) {
			out.println(msg);
		}
		else {
			System.out.println("** No output stream!");
		}
	}
	
	@Override
	public void run() {
		
		try {
			
			System.out.println("Server started, waiting for connection");
			ServerSocket ss = new ServerSocket(4444);
			Socket client = ss.accept();
			System.out.println("Connection established!");
			
			// Connection to user established :)
			
			// Get streams
			InputStream inS = client.getInputStream();
			OutputStream outS = client.getOutputStream();
			
			// Get ability to write to streams
			out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(outS)), true);
			in = new BufferedReader(new InputStreamReader(inS));
			
			// Input loop
			boolean running = true;
			while(running) {
				String input = in.readLine();
				if (input != null) {
					listener.messageReceived(input);
				}
			}
			
			
			
			
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		// TODO make loop
	}

	public interface OnMessageReceived {
		public void messageReceived(String msg);
	}
	
}
