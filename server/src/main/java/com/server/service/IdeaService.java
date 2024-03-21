package com.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.bean.Idea;
import com.server.repo.IdeaRepo;

import java.util.List;
import java.util.Optional;

@Service
public class IdeaService {

	private IdeaRepo ideaRepository;

	@Autowired
	public IdeaService(IdeaRepo ideaRepository) {
		this.ideaRepository = ideaRepository;
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