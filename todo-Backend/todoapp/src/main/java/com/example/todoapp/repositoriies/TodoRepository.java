package com.example.todoapp.repositoriies;

import com.example.todoapp.models.Todo;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface TodoRepository extends MongoRepository<Todo, String> {

}
