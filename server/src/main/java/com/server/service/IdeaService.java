package com.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.bean.Idea;
import com.server.bean.Participant;
import com.server.repo.IdeaRepo;

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





    }

