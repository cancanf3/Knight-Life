/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webservice;

import knightlife.Organization;
import knightlife.Event;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
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
    public ArrayList<Organization> getRSO() throws FileNotFoundException, IOException, ParseException {
        ArrayList<Organization> db = new ArrayList<>();
        JSONParser parser = new JSONParser();
        JSONArray a = (JSONArray) parser.parse(new FileReader("/Users/josepena/Knight-Life/src/assets/jsons/RSOs.json"));
        for (Object o : a) {
            JSONObject org = (JSONObject) o;
            Organization orga = new Organization();
            orga.owner = (String) org.get("owner");
            orga.name = (String) org.get("name");
            orga.description = (String) org.get("description");
            orga.image = (String) org.get("image");
            db.add(orga);
        }
        
       return db;
    }

    @GET
    @Path("events")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getEvents() throws FileNotFoundException, IOException, ParseException {
        ArrayList<Event> db = new ArrayList<>();
        JSONParser parser = new JSONParser();
        JSONArray a = (JSONArray) parser.parse(new FileReader("/Users/josepena/Knight-Life/src/assets/jsons/events.json"));
        for (Object o : a) {
            JSONObject ev = (JSONObject) o;
            Event event = new Event();
            event.date = (String) ev.get("date");
            event.eid = (String) ev.get("eid");
            event.dateend = (String) ev.get("dateend");
            event.title = (String) ev.get("title");
            event.owner = (String) ev.get("owner");
            event.tags = (ArrayList<String>) ev.get("tags");
             
            db.add(event);
        }
        
        return Response
            .status(200)
            .header("Access-Control-Allow-Origin", "*")
            .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
            .header("Access-Control-Allow-Credentials", "true")
            .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
            .header("Access-Control-Max-Age", "1209600")
            .entity(db)
            .build();
        
    }
    
    @GET
    
    /**
     * PUT method for updating or creating an instance of KnightLife
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
