package com.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.bean.Idea;
import com.server.bean.Panelist;
import com.server.bean.Participant;
import com.server.repo.IdeaRepo;

import java.util.List;
import java.util.Optional;

@Service
public class IdeaService {

    private IdeaRepo ideaRepository;
    @Autowired
    private ParticipantService participantService;

    @Autowired
    public IdeaService(IdeaRepo ideaRepository, ParticipantService participantService) {
        this.ideaRepository = ideaRepository;
        this.participantService = participantService;
    }
    public void updateRatingAndFeedback(String ideaId, double newRating, String newFeedback) {
        System.out.println("Received ideaId: " + ideaId);

        Optional<Idea> optionalIdea = ideaRepository.findById(ideaId);

        if (optionalIdea.isPresent()) {
            Idea idea = optionalIdea.get();
            System.out.println("Found idea with title: " + idea.getTitle());

            // Update the rating and feedback fields
            idea.setRating(newRating);
            idea.setFeedback(newFeedback);

            // Save the updated idea to the database
            ideaRepository.save(idea);

            System.out.println("Updated idea: " + idea);
            
            
        } else {
            // Handle the case where the idea with the given ID is not found
            System.out.println("Idea not found!");
        }
        }
        public List<Idea> getAllIdeas() {
            return ideaRepository.findAll();
        }

        public Idea getIdeaById(String id) {
            Optional<Idea> optionalIdea = ideaRepository.findById(id);
            return optionalIdea.orElse(null);
        }

        public Idea addIdea(Idea idea) {
            return ideaRepository.save(idea);
        }

        public Idea updateIdea(String id, Idea idea) {
            // Implement update logic here
            // Make sure to set the ID of the new idea object
            idea.setId(id);
            return ideaRepository.save(idea);
        }

        public void deleteIdea(String id) {
            ideaRepository.deleteById(id);
        }
        public void updateSuggestionAndStatus(String ideaId, String newSuggestion, String newStatus) {
            Optional<Idea> optionalIdea = ideaRepository.findById(ideaId);

            if (optionalIdea.isPresent()) {
                Idea idea = optionalIdea.get();
               
                idea.updateSuggestionAndStatus(newSuggestion, newStatus);
                ideaRepository.save(idea);
            } else {
                System.out.println("Idea not found!");
            }
        }

    }





    

