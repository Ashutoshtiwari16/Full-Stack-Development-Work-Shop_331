import React from "react";
import { useForm } from "react-hook-form";

function Form() {

    // useForm gives us functions to handle the form
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // This function runs when the form is submitted successfully
    const onSubmit = (data) => {
        console.log(data);
        alert("Form submitted successfully!");
    };

    return (
        <div>

            <h1>Student Registration Form</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Name */}
                <label>Name:</label>
                <input
                    type="text"
                    {...register("name", {
                        required: "Name is required"
                    })}
                />

                {errors.name && (
                    <p>{errors.name.message}</p>
                )}


                {/* Email */}
                <label>Email:</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required"
                    })}
                />

                {errors.email && (
                    <p>{errors.email.message}</p>
                )}


                {/* Password */}
                <label>Password:</label>
                <input
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })}
                />

                {errors.password && (
                    <p>{errors.password.message}</p>
                )}


                {/* Age */}
                <label>Age:</label>
                <input
                    type="number"
                    {...register("age", {
                        required: "Age is required",
                        min: {
                            value: 18,
                            message: "Age must be at least 18"
                        }
                    })}
                />

                {errors.age && (
                    <p>{errors.age.message}</p>
                )}


                {/* Gender */}
                <label>Gender:</label>

                <select
                    {...register("gender", {
                        required: "Please select gender"
                    })}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                {errors.gender && (
                    <p>{errors.gender.message}</p>
                )}


                {/* Course */}
                <label>Course:</label>

                <select
                    {...register("course", {
                        required: "Please select a course"
                    })}
                >
                    <option value="">Select Course</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="Mechanical">Mechanical</option>
                </select>

                {errors.course && (
                    <p>{errors.course.message}</p>
                )}


                {/* Phone */}
                <label>Phone:</label>
                <input
                    type="tel"
                    {...register("phone", {
                        required: "Phone number is required",
                        minLength: {
                            value: 10,
                            message: "Phone number must have 10 digits"
                        }
                    })}
                />

                {errors.phone && (
                    <p>{errors.phone.message}</p>
                )}


                {/* Submit */}
                <button type="submit">
                    Submit
                </button>

            </form>

        </div>
    );
}

export default Form;