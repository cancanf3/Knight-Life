/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package knightlife;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintStream;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
/**
 * REST Web Service
 *
 * @author josepena
 */
@Path("rest")
public class KnightLife {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of KnightLife
     */
    public KnightLife() {
    }

    /**
     * Retrieves representation of an instance of webservice.KnightLife
     * @return an instance of java.lang.String
     */
    
    @GET
    @Path("organizations")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getRSO() throws FileNotFoundException, IOException, ParseException {
        
        JSONParser parser = new JSONParser();
        JSONArray a = (JSONArray) parser.parse(new InputStreamReader(getClass().getResourceAsStream("RSO.json")));

        
       return Response
            .status(200)
            .header("Access-Control-Allow-Origin", "*")
            .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
            .header("Access-Control-Allow-Credentials", "true")
            .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
            .header("Access-Control-Max-Age", "1209600")
            .entity(a.toString())
            .build();
    }
    
    @GET
    @Path("organizations/{token}")
    public Response getUserRSO(@PathParam("token") String token) throws IOException, ParseException {
        
        JSONParser parser = new JSONParser();
        JSONArray a = (JSONArray) parser.parse(new InputStreamReader(getClass().getResourceAsStream("users.json")));
        String respond;
        for (Object o : a) {
            JSONObject ev = (JSONObject) o;
            if (token.compareTo((String) ev.get("token")) == 0 ) {
                JSONArray rsosUser = (JSONArray) ev.get("organizations");
                respond = getRso(rsosUser);
                
                return Response
                    .status(200)
                    .header("Access-Control-Allow-Origin", "*")
                    .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
                    .header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                    .header("Access-Control-Max-Age", "1209600")
                    .entity(respond)
                    .build();            
            }
            
        }
        
        return Response
            .status(500)
            .header("Access-Control-Allow-Origin", "*")
            .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
            .header("Access-Control-Allow-Credentials", "true")
            .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
            .header("Access-Control-Max-Age", "1209600")
            .entity("User does not exist")
            .build(); 
    }
    
    private String getRso( JSONArray names ) throws IOException, ParseException { 
        JSONParser parser = new JSONParser();
        JSONArray a = (JSONArray) parser.parse(new InputStreamReader(getClass().getResourceAsStream("RSO.json")));
        JSONArray result = new JSONArray();
        
        
        for ( Object rso : names) {    
            for (Object u: a) {
                    JSONObject ev = (JSONObject) u;
                    if ( ((String)ev.get("name")).compareTo(rso.toString()) == 0) {
                        result.add(ev);
                    }
                }
        }
        
        return result.toString();
    }

    @POST
    @Path("organizations/favorite/{token}")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public Response postUserRSO(@PathParam("token") String token,
                                @FormParam("organization") String organization) throws FileNotFoundException, URISyntaxException, IOException, ParseException {
        
        int status = 500;
        String respond = "User does not exist";
        JSONParser parser = new JSONParser();
        JSONArray a = (JSONArray) parser.parse(new InputStreamReader(getClass().getResourceAsStream("users.json")));
        for (Object o : a) {
            JSONObject ev = (JSONObject) o;
            if (token.compareTo((String) ev.get("token")) == 0 ) {
                JSONArray rsosUser = (JSONArray) ev.get("organizations");
                rsosUser.add(organization);
                ev.put("organizations", rsosUser);
                status = 200;
                respond = "RSO added";
                break;
            }
            
        }
        if (status == 200) {
            URL resourceUrl = getClass().getResource("users.json");
            File file = new File(resourceUrl.toURI());
            OutputStream output = new FileOutputStream(file);
            PrintStream printStream = new PrintStream(output);
            printStream.print(a.toString());
            printStream.close();
        }
        return Response
            .status(status)
            .header("Access-Control-Allow-Origin", "*")
            .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
            .header("Access-Control-Allow-Credentials", "true")
            .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
            .header("Access-Control-Max-Age", "1209600")
            .entity(respond)
            .build();  
    }
    
    
    @POST
    @Path("organizations/defavorite/{token}")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public Response removeUserRSO(@PathParam("token") String token,
                                  @FormParam("organization") String organization) throws FileNotFoundException, URISyntaxException, IOException, ParseException {
        
        int status = 500;
        String respond = "User does not exist";
        JSONParser parser = new JSONParser();
        JSONArray a = (JSONArray) parser.parse(new InputStreamReader(getClass().getResourceAsStream("users.json")));
        for (Object o : a) {
            JSONObject ev = (JSONObject) o;
            if (token.compareTo((String) ev.get("token")) == 0 ) {
                JSONArray rsosUser = (JSONArray) ev.get("organizations");
                rsosUser.remove(organization);
                ev.put("organizations", rsosUser);
                status = 200;
                respond = "RSO added";
                break;
            }
            
        }
        if (status == 200) {
            URL resourceUrl = getClass().getResource("users.json");
            File file = new File(resourceUrl.toURI());
            OutputStream output = new FileOutputStream(file);
            PrintStream printStream = new PrintStream(output);
            printStream.print(a.toString());
            printStream.close();
        }
        return Response
            .status(status)
            .header("Access-Control-Allow-Origin", "*")
            .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
            .header("Access-Control-Allow-Credentials", "true")
            .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
            .header("Access-Control-Max-Age", "1209600")
            .entity(respond)
            .build();  
    }
    
    @GET
    @Path("events")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getEvents() throws FileNotFoundException, IOException, ParseException {
        
        JSONParser parser = new JSONParser();
        JSONArray a = (JSONArray) parser.parse(new InputStreamReader(getClass().getResourceAsStream("events.json")));

        
        return Response
            .status(200)
            .header("Access-Control-Allow-Origin", "*")
            .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
            .header("Access-Control-Allow-Credentials", "true")
            .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
            .header("Access-Control-Max-Age", "1209600")
            .entity(a.toString())
            .build();
    }
    
    
    @POST
    @Path("/auth/login")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public Response authentication (@FormParam("username") String username, 
                                  @FormParam("password") String password) throws IOException, ParseException {
  
        
        String respond = "Username or Password Incorrect";
        int status = 500;
        JSONParser parser = new JSONParser();
        JSONArray a = (JSONArray) parser.parse(new InputStreamReader(getClass().getResourceAsStream("users.json")));
        for (Object o : a) {
            JSONObject ev = (JSONObject) o;
            if (username.compareTo((String) ev.get("username")) == 0 &&
                password.compareTo((String) ev.get("password")) == 0   ) {
                status = 200;
                respond = (String) ev.get("token");
            }
            
        }
        return Response
            .status(status)
            .header("Access-Control-Allow-Origin", "*")
            .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
            .header("Access-Control-Allow-Credentials", "true")
            .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
            .header("Access-Control-Max-Age", "1209600")
            .entity(respond)
            .build();
    }
    
    
    @POST
    @Path("/auth/create")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public Response createAccount (@FormParam("username") String username, 
                                  @FormParam("password") String password) throws IOException, ParseException, URISyntaxException {
        
        int token = 0;
        JSONParser parser = new JSONParser();
        JSONArray a = (JSONArray) parser.parse(new InputStreamReader(getClass().getResourceAsStream("users.json")));
        for (Object o : a) {
            JSONObject ev = (JSONObject) o;
            if (username.compareTo((String) ev.get("username")) == 0 )
                return Response
                    .status(500)
                    .header("Access-Control-Allow-Origin", "*")
                    .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
                    .header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                    .header("Access-Control-Max-Age", "1209600")
                    .entity("Username already exist")
                    .build();
            token++;
        }
        JSONObject newUser = new JSONObject();
        JSONArray organizations = new JSONArray();
        newUser.put("username", username);
        newUser.put("password", password);
        newUser.put("token", Integer.toString(token));
        newUser.put("organizations",(Object) organizations);
        
        a.add(newUser);
        URL resourceUrl = getClass().getResource("users.json");
        File file = new File(resourceUrl.toURI());
        OutputStream output = new FileOutputStream(file);
        PrintStream printStream = new PrintStream(output);
        printStream.print(a.toString());
        printStream.close();
         
     
        return Response
                    .status(200)
                    .header("Access-Control-Allow-Origin", "*")
                    .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
                    .header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                    .header("Access-Control-Max-Age", "1209600")
                    .entity("User Created")
                    .build();
    }
}
