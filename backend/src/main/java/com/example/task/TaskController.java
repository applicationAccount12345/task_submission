package com.example.task;

import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import jakarta.validation.Valid;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@RestController
@RequestMapping("/tasks")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173") // Allow frontend
@Tag(name = "Task Management", description = "Endpoints for managing tasks")
public class TaskController {

    private final TaskRepository taskRepository;

    @PostMapping
    @SuppressWarnings("null")
    @Operation(summary = "Create a new task", description = "Creates a new task with title, description, status, and due date.")
    @ApiResponse(responseCode = "200", description = "Task created successfully")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public Task createTask(@Valid @RequestBody Task task) {
        return taskRepository.save(task);
    }

    @GetMapping
    @Operation(summary = "Get all tasks", description = "Retrieves a list of all tasks.")
    @ApiResponse(responseCode = "200", description = "Successfully retrieved list")
    public java.util.List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
}
