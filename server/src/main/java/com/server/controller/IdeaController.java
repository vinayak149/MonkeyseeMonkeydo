package com.server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
 
import com.server.bean.Idea;
import com.server.service.IdeaService;
 
import java.util.List;
 
@RequestMapping("/ideas")
@RestController
public class IdeaController {
    private final IdeaService ideaService;
 
    public IdeaController(IdeaService ideaService) {
        this.ideaService = ideaService;
    }
 
    @GetMapping("/all")
    public ResponseEntity<List<Idea>> getAllIdeas() {
        List<Idea> ideas = ideaService.getAllIdeas();
        return ResponseEntity.ok(ideas);
    }
 
    @GetMapping("/{id}")
    public ResponseEntity<Idea> getIdeaById(@PathVariable String id) {
        Idea idea = ideaService.getIdeaById(id);
        if (idea != null) {
            return ResponseEntity.ok(idea);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
 
    @PostMapping("/add")
    public ResponseEntity<Idea> addIdea(@RequestBody Idea idea) {
        Idea savedIdea = ideaService.addIdea(idea);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedIdea);
    }
 
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateIdea(@PathVariable String id, @RequestBody Idea idea) {
        Idea updatedIdea = ideaService.updateIdea(id, idea);
        if (updatedIdea != null) {
            return ResponseEntity.ok("Idea updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
 
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteIdea(@PathVariable String id) {
        ideaService.deleteIdea(id);
        return ResponseEntity.ok("Idea deleted successfully");
    }
}